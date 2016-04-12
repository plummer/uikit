import $ from 'jquery';

export default function (UIkit) {

    UIkit.component('toggle', {

        mixins: [UIkit.mixin.toggable],

        props: {
            href: 'jQuery',
            target: 'jQuery'
        },

        defaults: {
            href: false,
            target: false
        },

        ready() {
            this.target = this.target || this.href;
        },

        events: {

            click(e) {

                if (String($(e.target).closest('a').attr('href'))[0] === '#') {
                    e.preventDefault();
                }

                this.toggle();
            },

            mouseenter() {
                this.target.trigger('toggleenter', [this.$el]);
            },

            mouseleave() {
                this.target.trigger('toggleleave', [this.$el]);
            }

        },

        methods: {

            toggle() {
                var event = $.Event('toggle');
                this.target.trigger(event, [this.$el]);

                console.log(event, event.isDefaultPrevented())

                if (!event.isDefaultPrevented()) {
                    this.toggleElement(event.target);
                }
            }

        }

    });

}
