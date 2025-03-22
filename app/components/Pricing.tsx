export default function Pricing() {
  const tiers = [
    {
      id: 'hobby',
      name: 'Hobby',
      price: '$9',
      period: 'per month',
      description: 'Perfect for hobbyists and casual creators.',
      features: [
        '50 characters per month',
        'Basic style options',
        'Standard resolution outputs',
        'Commercial use license',
        'Email support',
      ],
      cta: 'Start for free',
      featured: false,
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '$29',
      period: 'per month',
      description: 'Best for professionals and small teams.',
      features: [
        '200 characters per month',
        'All style options',
        'High resolution outputs',
        'Commercial use license',
        'Background removal tool',
        'Priority email support',
        'Style customization',
      ],
      cta: 'Get started',
      featured: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      description: 'For studios and large teams with high volume needs.',
      features: [
        'Unlimited characters',
        'All style options',
        'Highest resolution outputs',
        'Extended commercial license',
        'Background removal tool',
        'Dedicated support',
        'API access',
        'Custom style training',
        'Team collaboration tools',
      ],
      cta: 'Contact us',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-foreground/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Pricing Plans</h2>
          <p className="text-foreground/70">
            Choose the perfect plan for your needs. All plans include a 7-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl overflow-hidden ${
                tier.featured
                  ? 'ring-2 ring-foreground transform md:scale-105 bg-background'
                  : 'bg-background'
              }`}
            >
              <div className="p-6">
                {tier.featured && (
                  <span className="inline-block bg-foreground/10 text-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="ml-1 text-sm text-foreground/70">{tier.period}</span>
                </div>
                <p className="mt-3 text-sm text-foreground/70">{tier.description}</p>
              </div>
              <div className="p-6 border-t border-foreground/10">
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-foreground/70 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a
                  href="#get-started"
                  className={`w-full block text-center py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                    tier.featured
                      ? 'bg-foreground text-background hover:opacity-90'
                      : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-foreground/70">
            Need a custom plan? <a href="#" className="font-medium underline hover:no-underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
} 