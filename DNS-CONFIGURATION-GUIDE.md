# DNS Configuration Guide - Applied AI Systems

**Commander**, here's your step-by-step DNS configuration guide to complete our professional deployment!

---

## 🎯 **OBJECTIVE**: Point applied-ai-systems.com to Vercel

### **Current Status**

- ✅ Vercel project configured and ready
- ✅ SSL certificates queued for automatic provisioning
- ✅ CI/CD pipeline updated and operational
- 🔧 **DNS configuration required** (5 minutes)

---

## 📋 **Required DNS Records**

### **Add these EXACT records at GoDaddy DNS:**

| Type  | Host/Name | Value/Points to | TTL              |
| ----- | --------- | --------------- | ---------------- |
| **A** | `@`       | `76.76.21.21`   | 600 (10 minutes) |
| **A** | `www`     | `76.76.21.21`   | 600 (10 minutes) |

**Translation:**

- `@` = `applied-ai-systems.com` (root domain)
- `www` = `www.applied-ai-systems.com` (www subdomain)
- Both point to Vercel's IP: `76.76.21.21`

---

## 🔧 **Step-by-Step Instructions**

### **Step 1: Access GoDaddy DNS Management**

1. Go to [GoDaddy DNS Management](https://account.godaddy.com/products)
2. Find **applied-ai-systems.com** domain
3. Click **DNS** or **Manage DNS**

### **Step 2: Add/Update A Records**

1. Look for existing **A records**
2. **Delete** any existing A records for `@` and `www`
3. **Add new A record** for root domain:
   - **Type**: A
   - **Host**: `@` (or leave blank)
   - **Points to**: `76.76.21.21`
   - **TTL**: 600 seconds
4. **Add new A record** for www:
   - **Type**: A
   - **Host**: `www`
   - **Points to**: `76.76.21.21`
   - **TTL**: 600 seconds

### **Step 3: Save Changes**

1. **Save** all DNS changes
2. **Confirm** both records are active
3. **Wait 5-10 minutes** for DNS propagation

---

## ✅ **Verification Steps**

### **After DNS Configuration**

1. **Run our test script:**

   ```bash
   ./test-dns.sh
   ```

2. **Manual verification:**

   ```bash
   # Check DNS resolution
   dig applied-ai-systems.com A
   dig www.applied-ai-systems.com A

   # Test website access
   curl -I https://applied-ai-systems.com
   curl -I https://www.applied-ai-systems.com
   ```

3. **Expected results:**
   - DNS queries return `76.76.21.21`
   - HTTP responses show `200 OK`
   - SSL certificates automatically provisioned
   - No more 401 authentication required

---

## 🚀 **What Happens Next**

### **Immediate (5-10 minutes after DNS):**

- ✅ DNS propagation completes globally
- ✅ Vercel automatically provisions SSL certificates
- ✅ Team authentication protection removed
- ✅ Website publicly accessible at applied-ai-systems.com

### **Automatic SSL Certificate Process:**

1. **Vercel detects** DNS pointing to their servers
2. **Let's Encrypt** automatically issues SSL certificates
3. **HTTPS enforced** with automatic HTTP→HTTPS redirect
4. **Certificate auto-renewal** configured

---

## 🔍 **Troubleshooting**

### **If DNS doesn't resolve:**

- **Wait longer**: DNS propagation can take up to 24 hours (usually 5-10 minutes)
- **Clear DNS cache**: `sudo dscacheutil -flushcache` (macOS)
- **Check different DNS**: Try Google DNS (8.8.8.8) for testing
- **Verify records**: Use [DNS Checker](https://dnschecker.org/)

### **If website shows errors:**

- **401 errors**: DNS not fully propagated yet
- **SSL errors**: Certificates still being issued (wait 5-10 minutes)
- **404 errors**: DNS correct, but Vercel routing issue (run `vercel domains inspect`)

### **Common GoDaddy Issues:**

- **Parking page**: Disable GoDaddy domain forwarding/parking
- **Previous records**: Delete conflicting A/CNAME records
- **Propagation delay**: GoDaddy sometimes takes longer to propagate

---

## 📞 **Support Resources**

### **If You Need Help:**

1. **GoDaddy Support**: 1-800-464-2384
2. **Vercel Status**: [vercel-status.com](https://vercel-status.com)
3. **DNS Checker**: [dnschecker.org](https://dnschecker.org)

### **Quick Reference:**

- **Domain**: applied-ai-systems.com
- **Vercel IP**: 76.76.21.21
- **Current deployment**: <https://aas-website-public-jphdt1wvu-rs-projects-fac3ff82.vercel.app>

---

## 🎉 **Success Metrics**

### **When complete, you'll have:**

- ✅ **Professional website** at <https://applied-ai-systems.com>
- ✅ **SSL certificates** with A+ security rating
- ✅ **Global CDN** for fast loading worldwide
- ✅ **Government-grade infrastructure** ready for business
- ✅ **Automatic deployments** via professional CI/CD pipeline

### **Business Ready:**

- Professional presentation for government contracts
- Technical credibility for aerospace clients
- Scalable platform for immediate growth
- Quality assurance that maintains contractor standards

---

## ⏱️ **Timeline Estimate**

- **DNS Configuration**: 2-3 minutes
- **DNS Propagation**: 5-10 minutes
- **SSL Certificate Provisioning**: 2-5 minutes
- **Total time**: **10-15 minutes maximum**

---

**Ready to go live, Commander?** 🚀

Once you complete the DNS configuration, run `./test-dns.sh` and we'll have Applied AI Systems
officially launched with professional infrastructure worthy of government contracting!

---

_Generated by Claude Code - Professional Development Assistant_
_Applied AI Systems LLC - Ready for Business_
