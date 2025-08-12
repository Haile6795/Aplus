const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/blog"
            },
            {
                "loc": "/about"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/login"
            },
            {
                "loc": "/contact"
            },
            {
                "loc": "/pricing"
            },
            {
                "loc": "/admin/faq"
            },
            {
                "loc": "/admin"
            },
            {
                "loc": "/Free-classes"
            },
            {
                "loc": "/privacy-policy"
            },
            {
                "loc": "/admin/referrals"
            },
            {
                "loc": "/terms-of-service"
            },
            {
                "loc": "/admin/consultation"
            },
            {
                "loc": "/admin/contact"
            },
            {
                "loc": "/admin/pricing"
            },
            {
                "loc": "/internalusers/users"
            },
            {
                "loc": "/admin/pricing/create"
            },
            {
                "loc": "/admin/testimonials"
            },
            {
                "loc": "/admin/testimonials/create"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:route-rules",
            "description": "Generated from your route rules config.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:route-rules'] }`."
            ]
        },
        "urls": [
            "/",
            "/about",
            "/contact",
            "/pricing",
            "/privacy-policy",
            "/terms-of-service"
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            "/",
            "/about",
            "/contact",
            "/pricing",
            "/privacy-policy",
            "/terms-of-service",
            {
                "loc": "/contact"
            },
            {
                "loc": "/privacy-policy"
            },
            {
                "loc": "/terms-of-service"
            },
            {
                "loc": "/about"
            },
            {
                "loc": "/pricing"
            },
            {
                "loc": "/"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
