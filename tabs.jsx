import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const titles = ["One", "Two", "Three"];
    const contents = ["one", "two", "three"];
    this.state = { title: titles, content: contents, index: 0};
  }
  //
  // setTab() {
  //   this.state.title.push("aaaaa");
  //   this.state.content.push("aaaaa");
  //   this.state.title.push("dadsfgg");
  //   this.state.content.push("sssss");
  // }

  updateIndex(idx) {
    this.setState({index: idx});
  }

  render () {

    let tabsDivs = this.state.title.map((title, idx) => (
      <li className={"li_class"} key={`${title}`+idx}
        onClick={this.updateIndex.bind(this, idx)}>
        <h1>{title}</h1>

      </li>
    ));


    return (
      <div>
        <div>

          <h1>Tabs</h1>

          <ul className={"ul_class"}>
            {tabsDivs}
          </ul>
          <article className={"tab-content"}>{this.state.content[this.state.index]}</article>
        </div>

      </div>
    );
  }
}

export default Tabs;
