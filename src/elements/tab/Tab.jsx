import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

class TabsTwo extends Component {
  render() {  
    const { tabStyle, tabs } = this.props

    const [skills, education] = tabs
    
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    { tabs && tabs?.map((tab, i) => 
                      <Tab key={i}>{tab.title}</Tab>
                    )}
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="#service">
                            {skills.first.title} <span>{skills.first?.['side-title']}</span>
                          </a>
                          {skills.first.text}
                        </li>
                        <li>
                          <a href="#service">
                            {skills.second.title} <span>{skills.second?.['side-title']}</span>
                          </a>
                          {skills.second.text}
                        </li>
                        <li>
                          <a href="#service">
                            {skills.third.title} <span>{skills.third?.['side-title']}</span>
                          </a>
                          {skills.third.text}
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  {/* <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Awwwards.com <span>- Winner</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a href="/service">
                            CSS Design Awards <span>- Winner</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Design nominees <span>- site of the day</span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Sr. Front-end Engineer<span> - Google</span>
                          </a>{" "}
                          2018 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Front-end Engineer<span> - Microsoft</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Software Engineer<span> - Alibaba </span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel> */}

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            {education.first.title} <span>{education.first?.['side-title']}</span>
                          </a>
                          {education.first.text}
                        </li>
                        <li>
                          <a href="/service">
                            {education.second.title} <span>{education.second?.['side-title']}</span>
                          </a>
                          {education.second.text}
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    )
  }
}

export default TabsTwo
