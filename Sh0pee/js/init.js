(function($) {
	skel.init({
		reset: 'full',
		breakpoints: {
				global: {
					range: '*',
					href: 'css/style.css',
					containers: 1400,
					grid: {
						gutters: {
							vertical: '4em',
							horizontal: 0
						}
					}
				},

				xlarge: {
					range: '-1680',
					href: 'css/style-xlarge.css',
					containers: 1200
				},

				large: {
					range: '-1280',
					href: 'css/style-large.css',
					containers: 960,
					grid: {
						gutters: {
							vertical: '2.5em'
						}
					},
					viewport: {
						scalable: false
					}
				},

				medium: {
					range: '-980',
					href: 'css/style-medium.css',
					containers: '90%',
					grid: {
						collapse: 1
					}
				},

				small: {
					range: '-736',
					href: 'css/style-small.css',
					containers: '90%',
					grid: {
						gutters: {
							vertical: '1.25em'
						}
					}
				},

				xsmall: {
					range: '-480',
					href: 'css/style-xsmall.css',
					grid: {
						collapse: 2
					}
				}

		},
		plugins: {
			layers: {
				
					config: {
						transform: true
					},
				
					navPanel: {
						animation: 'pushX',
						breakpoints: 'medium',
						clickToHide: true,
						height: '100%',
						hidden: true,
						html: '<div data-action="moveElement" data-args="nav"></div>',
						orientation: 'vertical',
						position: 'top-left',
						side: 'left',
						width: 250
					},

					navButton: {
						breakpoints: 'medium',
						height: '4em',
						html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
						position: 'top-left',
						side: 'top',
						width: '6em'
					}

			}
		}
	});

	$(function() {
		
	});

})(jQuery);