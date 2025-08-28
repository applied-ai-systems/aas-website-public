# LIVE DNS Configuration - Do This Now

**Commander**, let's get this done together! Follow these exact steps:

## 🎯 **STEP 1: Open GoDaddy**

1. Go to: <https://account.godaddy.com/products>
2. Find **applied-ai-systems.com**
3. Click **DNS** button

## 🎯 **STEP 2: Add A Records**

Look for the DNS Records section and:

**For Root Domain (@):**

- Type: `A`
- Name/Host: `@` (or leave blank)
- Value: `76.76.21.21`
- TTL: `600`

**For WWW Subdomain:**

- Type: `A`
- Name/Host: `www`
- Value: `76.76.21.21`
- TTL: `600`

## 🎯 **STEP 3: Save & Test**

1. Click **Save** on both records
2. Wait 2 minutes
3. Run: `./test-dns.sh` in your terminal

## 🚨 **EXACT VALUES NEEDED:**

```text
A    @      76.76.21.21    600
A    www    76.76.21.21    600
```

**That's it! Once saved, our site will be live in 5-10 minutes.**
