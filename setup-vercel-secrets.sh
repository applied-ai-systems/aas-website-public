#!/bin/bash

# Applied AI Systems - Vercel GitHub Secrets Setup
# Professional CI/CD Configuration Script

echo "🚀 Applied AI Systems - Vercel Integration Setup"
echo "================================================"
echo ""

# Check if token is provided
if [ -z "$1" ]; then
    echo "❌ Usage: $0 <VERCEL_TOKEN>"
    echo ""
    echo "📋 Steps to get your Vercel token:"
    echo "1. Go to: https://vercel.com/account/tokens"
    echo "2. Create a new token with name: 'AAS GitHub Actions'"
    echo "3. Copy the token and run: $0 <your-token>"
    echo ""
    exit 1
fi

VERCEL_TOKEN=$1
VERCEL_ORG_ID="team_OMvYmyWBDAriNJweGBJVeMiv"
VERCEL_PROJECT_ID="prj_iG2a0QOVSNH81QRaKbzuYMvmpUGu"

echo "🔐 Setting up GitHub repository secrets..."
echo ""

# Add secrets to GitHub repository
echo "Adding VERCEL_TOKEN..."
gh secret set VERCEL_TOKEN --body "$VERCEL_TOKEN" --repo applied-ai-systems/aas-website-public

echo "Adding VERCEL_ORG_ID..."
gh secret set VERCEL_ORG_ID --body "$VERCEL_ORG_ID" --repo applied-ai-systems/aas-website-public

echo "Adding VERCEL_PROJECT_ID..."
gh secret set VERCEL_PROJECT_ID --body "$VERCEL_PROJECT_ID" --repo applied-ai-systems/aas-website-public

echo ""
echo "✅ GitHub secrets configured successfully!"
echo ""
echo "🔍 Verifying secrets..."
gh secret list --repo applied-ai-systems/aas-website-public

echo ""
echo "🚀 Ready to deploy! Your CI/CD pipeline will now:"
echo "   ✅ Run code quality checks"
echo "   ✅ Perform security scanning"
echo "   ✅ Execute performance tests"
echo "   ✅ Deploy to Vercel automatically"
echo ""
echo "🌐 Next commit will trigger full deployment pipeline!"
echo "💼 Professional government contractor grade CI/CD active!"
