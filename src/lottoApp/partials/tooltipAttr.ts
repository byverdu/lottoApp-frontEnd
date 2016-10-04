import { customAttribute, autoinject, bindable } from 'aurelia-framework';

@autoinject
@customAttribute('tooltip')
export class TooltipAttr {
  constructor(private element: Element) {
  }

  bind() {
    jQuery(this.element).tooltip();
  }

  unbind() {
    jQuery(this.element).tooltip('destroy');
  }
}
