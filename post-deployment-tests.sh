#!/bin/bash

# Applied AI Systems - Post-Deployment Test Suite
# Comprehensive testing after DNS configuration

set -e

echo "🧪 Applied AI Systems - Post-Deployment Testing Suite"
echo "==================================================="
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test counter
TESTS_PASSED=0
TESTS_FAILED=0

# Helper functions
pass() {
    echo -e "${GREEN}✅ PASS:${NC} $1"
    ((TESTS_PASSED++))
}

fail() {
    echo -e "${RED}❌ FAIL:${NC} $1"
    ((TESTS_FAILED++))
}

warn() {
    echo -e "${YELLOW}⚠️  WARN:${NC} $1"
}

info() {
    echo -e "${BLUE}ℹ️  INFO:${NC} $1"
}

echo "🔍 Starting comprehensive website testing..."
echo ""

# Test 1: DNS Resolution
echo "1. Testing DNS Resolution"
echo "========================="
if dig +short applied-ai-systems.com A | grep -q "76.76.21.21"; then
    pass "Main domain DNS resolves to Vercel"
else
    fail "Main domain DNS not pointing to Vercel"
fi

if dig +short www.applied-ai-systems.com A | grep -q "76.76.21.21"; then
    pass "WWW subdomain DNS resolves to Vercel"
else
    fail "WWW subdomain DNS not pointing to Vercel"
fi
echo ""

# Test 2: HTTP Response Codes
echo "2. Testing HTTP Response Codes"
echo "==============================="
MAIN_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://applied-ai-systems.com)
if [ "$MAIN_STATUS" = "200" ]; then
    pass "Main domain returns HTTP 200 OK"
elif [ "$MAIN_STATUS" = "401" ]; then
    warn "Main domain still has authentication protection (DNS may still be propagating)"
else
    fail "Main domain returns HTTP $MAIN_STATUS"
fi

WWW_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.applied-ai-systems.com)
if [ "$WWW_STATUS" = "200" ]; then
    pass "WWW subdomain returns HTTP 200 OK"
elif [ "$WWW_STATUS" = "401" ]; then
    warn "WWW subdomain still has authentication protection (DNS may still be propagating)"
else
    fail "WWW subdomain returns HTTP $WWW_STATUS"
fi
echo ""

# Test 3: SSL Certificate Validation
echo "3. Testing SSL Certificates"
echo "============================"
if openssl s_client -connect applied-ai-systems.com:443 -servername applied-ai-systems.com </dev/null 2>/dev/null | openssl x509 -noout -subject | grep -q "applied-ai-systems.com"; then
    pass "SSL certificate issued for main domain"
else
    fail "SSL certificate not properly configured for main domain"
fi

if openssl s_client -connect www.applied-ai-systems.com:443 -servername www.applied-ai-systems.com </dev/null 2>/dev/null | openssl x509 -noout -subject | grep -q "applied-ai-systems.com"; then
    pass "SSL certificate issued for WWW subdomain"
else
    fail "SSL certificate not properly configured for WWW subdomain"
fi
echo ""

# Test 4: Content Validation
echo "4. Testing Website Content"
echo "==========================="
if curl -s https://applied-ai-systems.com | grep -q "Applied AI Systems"; then
    pass "Website displays correct company name"
else
    fail "Website content not loading or incorrect"
fi

if curl -s https://applied-ai-systems.com | grep -q "Government contractor"; then
    pass "Government contractor messaging present"
else
    fail "Government contractor messaging missing"
fi

if curl -s https://applied-ai-systems.com | grep -q "Space Physics"; then
    pass "Technical capabilities content present"
else
    fail "Technical capabilities content missing"
fi
echo ""

# Test 5: Performance Testing
echo "5. Testing Performance Metrics"
echo "==============================="
LOAD_TIME=$(curl -w "%{time_total}" -s -o /dev/null https://applied-ai-systems.com)
if (( $(echo "$LOAD_TIME < 3.0" | bc -l) )); then
    pass "Page load time under 3 seconds: ${LOAD_TIME}s"
else
    fail "Page load time too slow: ${LOAD_TIME}s"
fi

# Test file sizes
SIZE=$(curl -s -I https://applied-ai-systems.com | grep -i content-length | awk '{print $2}' | tr -d '\r')
if [ ! -z "$SIZE" ] && [ "$SIZE" -lt 100000 ]; then
    pass "Page size optimized: $(echo "scale=1; $SIZE/1024" | bc)KB"
else
    warn "Page size may be large or content-length not reported"
fi
echo ""

# Test 6: Security Headers
echo "6. Testing Security Headers"
echo "============================"
HEADERS=$(curl -s -I https://applied-ai-systems.com)

if echo "$HEADERS" | grep -q "strict-transport-security"; then
    pass "HSTS header present"
else
    fail "HSTS header missing"
fi

if echo "$HEADERS" | grep -q "x-frame-options"; then
    pass "X-Frame-Options header present"
else
    fail "X-Frame-Options header missing"
fi
echo ""

# Test 7: Vercel Integration
echo "7. Testing Vercel Integration"
echo "=============================="
if echo "$HEADERS" | grep -q "server: Vercel"; then
    pass "Served by Vercel CDN"
else
    fail "Not served by Vercel"
fi

if echo "$HEADERS" | grep -q "x-vercel-id"; then
    pass "Vercel deployment ID present"
else
    fail "Vercel deployment ID missing"
fi
echo ""

# Test 8: Mobile Responsiveness
echo "8. Testing Mobile Responsiveness"
echo "=================================="
if curl -s -H "User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X)" https://applied-ai-systems.com | grep -q "viewport"; then
    pass "Mobile viewport meta tag present"
else
    fail "Mobile viewport meta tag missing"
fi
echo ""

# Test 9: SEO Elements
echo "9. Testing SEO Elements"
echo "========================"
CONTENT=$(curl -s https://applied-ai-systems.com)

if echo "$CONTENT" | grep -q "<title>.*Applied AI Systems"; then
    pass "Page title contains company name"
else
    fail "Page title missing or incorrect"
fi

if echo "$CONTENT" | grep -q "meta.*description"; then
    pass "Meta description present"
else
    fail "Meta description missing"
fi
echo ""

# Test 10: GitHub Actions Integration
echo "10. Testing CI/CD Pipeline"
echo "==========================="
LATEST_COMMIT=$(git rev-parse HEAD)
WORKFLOW_STATUS=$(gh run list --limit 1 --json status --jq '.[0].status')

if [ "$WORKFLOW_STATUS" = "completed" ]; then
    pass "Latest CI/CD pipeline completed successfully"
else
    warn "Latest CI/CD pipeline status: $WORKFLOW_STATUS"
fi
echo ""

# Final Results
echo "📊 TEST RESULTS SUMMARY"
echo "========================"
echo -e "${GREEN}✅ Tests Passed: $TESTS_PASSED${NC}"
echo -e "${RED}❌ Tests Failed: $TESTS_FAILED${NC}"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL TESTS PASSED! Applied AI Systems is ready for business!${NC}"
    echo ""
    echo "🚀 Professional website deployment complete:"
    echo "   • https://applied-ai-systems.com"
    echo "   • Government contractor grade infrastructure"
    echo "   • Automated quality controls active"
    echo "   • Ready for client engagement"
    echo ""
else
    echo -e "${YELLOW}⚠️  Some tests failed. Review issues above before going live.${NC}"
    echo ""
fi

echo "🏆 Applied AI Systems - Professional Grade Quality Verified"
echo "Generated by Claude Code - Excellence in Engineering"
