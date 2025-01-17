import spx from 'spx';

export class Lifecycle extends spx.Component<typeof Lifecycle.connect> {

  static connect = {
    state: {
      init: Number,
      load: Number,
      leave: Number
    },
    nodes: [
      'foo',
      'bar',
      'baz',
      'qux'
    ]
  };

  oninit (): void {

    ++this.state.init;

    this.fooNode.style.backgroundColor = '#ccc';
    this.barNode.style.backgroundColor = '#999';
    this.bazNode.style.backgroundColor = '#111';
    this.quxNode.style.backgroundColor = '#fff';

    console.log('Lifecycle Testing: onInit');

  }

  onload (): void {

    ++this.state.load;

    if (this.state.load % 2 === 0) {

      this.fooNode.style.backgroundColor = 'green';
      this.barNode.style.backgroundColor = 'blue';
      this.bazNode.style.backgroundColor = 'pink';
      this.quxNode.style.backgroundColor = 'hotpink';

    } else {

      this.fooNode.style.backgroundColor = 'purple';
      this.barNode.style.backgroundColor = 'orange';
      this.bazNode.style.backgroundColor = 'yellow';
      this.quxNode.style.backgroundColor = 'cyan';

    }

    console.log('Lifecycle Testing: onLoad');

  }

  onexit (): void {

    ++this.state.leave;

    // console.log('Lifecycle Testing: onLeave Node', this.fooNode);
    // console.log('Lifecycle Testing: onLeave Node', this.barNode);
    // console.log('Lifecycle Testing: onLeave Node', this.bazNode);
    // console.log('Lifecycle Testing: onLeave Node', this.quxNode);
    console.log('Lifecycle Testing: onLeave');

  }

  /* -------------------------------------------- */
  /* NODES                                        */
  /* -------------------------------------------- */

  public fooNode: HTMLElement;
  public barNode: HTMLElement;
  public bazNode: HTMLElement;
  public quxNode: HTMLElement;

}
