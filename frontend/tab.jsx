import React from 'react';


class Header extends React.Component {
  render() {
    const selected = this.props.selectedPane;

    const headers = this.props.panes.map((pane, index) => {
      const title = pane.title;
      const klass = index === selected ? 'active' : ''

      return (
        <li key={index}
          className={klass}
          onClick={() => this.props.onTabChosen(index)}>
          {title}{" "}
        </li>
      );
    });


    return (
      <ul className='tab-header'>
        {headers}
      </ul>
    )
  }
}


class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab : 0 
    }
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({selectedTab : num})
  }

  render() {
    const pane = this.props.tabNames[this.state.selectedTab];

    return(
      <div className="tabs-container">
        <h1>Tabs</h1>
        <div className='tabs-info'>
          <Header 
            selectedPane = {this.state.selectedTab}
            onTabChosen = {this.selectTab}
            panes = {this.props.tabNames}>
          </Header>
          <div className='tab-content'>
            <article>
              {pane.content}
            </article>
          </div>
        </div>
      </div>
    )
  }
}

export default Tab;