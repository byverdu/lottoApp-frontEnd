import { customAttribute, autoinject, bindable } from 'aurelia-framework';

@autoinject
@customAttribute('tooltip-attr')
export class TooltipAttr {
   @bindable title:string;
  constructor(private element: Element) {
  }

  bind() {
    jQuery(this.element).tooltip();
  }

  unbind() {
    jQuery(this.element).tooltip('destroy');
  }
}
