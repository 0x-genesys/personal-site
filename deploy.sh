#!/bin/bash

# Exit on error
set -e

echo "=== Starting Deployment ==="

# Configuration
S3_BUCKET="personal-website-karan"
CLOUDFRONT_DISTRIBUTION_ID="E2XNCE5L1EM8JV"

# Validate environment variables
if [ -z "$S3_BUCKET" ]; then
    echo "Error: S3_BUCKET environment variable is not set."
    echo "Please set it using: export S3_BUCKET=your-bucket-name"
    exit 1
fi

if [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "Error: CLOUDFRONT_DISTRIBUTION_ID environment variable is not set."
    echo "Please set it using: export CLOUDFRONT_DISTRIBUTION_ID=your-distribution-id"
    exit 1
fi

echo "Deploying to S3 bucket: $S3_BUCKET"
echo "Purging CloudFront distribution: $CLOUDFRONT_DISTRIBUTION_ID"

# Build the project
echo ""
echo "=== Building Project ==="
npm run build

# Copy public assets to dist folder
echo ""
echo "=== Copying Public Assets ==="
cp -r public/* dist/

# Copy index.html to 404.html for client-side routing support
cp dist/index.html dist/404.html

# Upload files to S3
echo ""
echo "=== Uploading to S3 ==="

# Upload HTML files with no caching
echo "Uploading HTML files (no caching)..."
aws s3 sync dist/ s3://$S3_BUCKET \
    --exclude "*" \
    --include "*.html" \
    --include "*.htm" \
    --content-type "text/html" \
    --cache-control "no-cache, no-store, must-revalidate, max-age=0" \
    --acl public-read

# Upload CSS files with long-term caching
echo "Uploading CSS files (long-term caching)..."
aws s3 sync dist/ s3://$S3_BUCKET \
    --exclude "*" \
    --include "*.css" \
    --content-type "text/css" \
    --cache-control "public, max-age=31536000, immutable" \
    --acl public-read

# Upload JavaScript files with long-term caching
echo "Uploading JavaScript files (long-term caching)..."
aws s3 sync dist/ s3://$S3_BUCKET \
    --exclude "*" \
    --include "*.js" \
    --content-type "application/javascript" \
    --cache-control "public, max-age=31536000, immutable" \
    --acl public-read

# Upload images with long-term caching
echo "Uploading images (long-term caching)..."
aws s3 sync dist/ s3://$S3_BUCKET \
    --exclude "*" \
    --include "*.jpg" \
    --include "*.jpeg" \
    --include "*.png" \
    --include "*.gif" \
    --include "*.svg" \
    --include "*.webp" \
    --include "*.ico" \
    --content-type "image/jpeg" \
    --cache-control "public, max-age=31536000, immutable" \
    --acl public-read

# Upload other assets
echo "Uploading other assets..."
aws s3 sync dist/ s3://$S3_BUCKET \
    --exclude "*" \
    --include "*.json" \
    --include "*.xml" \
    --include "*.txt" \
    --content-type "text/plain" \
    --cache-control "public, max-age=31536000, immutable" \
    --acl public-read

# Upload remaining files
echo "Uploading remaining files..."
aws s3 sync dist/ s3://$S3_BUCKET \
    --exclude "*.html" \
    --exclude "*.htm" \
    --exclude "*.css" \
    --exclude "*.js" \
    --exclude "*.jpg" \
    --exclude "*.jpeg" \
    --exclude "*.png" \
    --exclude "*.gif" \
    --exclude "*.svg" \
    --exclude "*.webp" \
    --exclude "*.ico" \
    --exclude "*.json" \
    --exclude "*.xml" \
    --exclude "*.txt" \
    --acl public-read

# Purge CloudFront cache
echo ""
echo "=== Purging CloudFront Cache ==="
aws cloudfront create-invalidation \
    --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
    --paths "/*"

echo ""
echo "=== Deployment Complete ==="
echo "Your site should be live at https://$S3_BUCKET.s3.amazonaws.com"
