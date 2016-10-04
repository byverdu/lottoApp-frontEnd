import { customAttribute, autoinject } from 'aurelia-framework';

@autoinject
@customAttribute('tooltip')
export class TooltipAttr {
  constructor(private element: Element) {
  }

  bind() {
    jQuery(this.element).mouseenter(this.onMouseEnter.bind(this));
  }

  private onMouseEnter() {
    jQuery(this.element).tooltip('show');
    window.setTimeout(() => {
      jQuery(this.element).tooltip('hide');
    }, 1500);
  }

  unbind() {
    jQuery(this.element).tooltip('destroy');
  }
}
