import React, { Component } from "react"

class PortfolioList extends Component {
  render() {
    const { column, styleVariation, localePortfolio } = this.props

    const portfolioListContent = [
      {
        image: "image-4",
        category: localePortfolio.fourth.category,
        title: localePortfolio.fourth.title,
        link: "https://seguroscredreal.com.br",
        info: localePortfolio.fourth.info,
      },
      {
        image: "image-5",
        category: localePortfolio.fifth.category,
        title: localePortfolio.fifth.title,
        link: "https://bauenlife.com.br",
        info: localePortfolio.fifth.info,
      },
      {
        image: "image-6",
        category: localePortfolio.sixth.category,
        title: localePortfolio.sixth.title,
        link: "https://clinicaanima.com",
        info: localePortfolio.sixth.info,
      },
      {
        image: "image-1",
        category: localePortfolio.first.category,
        title: localePortfolio.first.title,
        link: "https://cocobearorganic.com",
        info: localePortfolio.first.info,
      },
      {
        image: "image-2",
        category: localePortfolio.second.category,
        title: localePortfolio.second.title,
        link: "https://cocobearthailand.com/",
        info: localePortfolio.second.info,
      },
      {
        image: "image-3",
        category: localePortfolio.third.category,
        title: localePortfolio.third.title,
        link: "https://www.grupogalpao.com.br/",
        info: localePortfolio.third.info,
      }
    ]

    const list = portfolioListContent.slice(0, this.props.item)

    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styleVariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner portfolio-item">
                  <p>{value.category}</p>
                  <h4>
                    <a href={value.link} rel="noreferrer" target="_blank">
                      {value.title}
                    </a>
                    <div
                      style={{
                        fontSize: "12px",
                        lineHeight: "normal",
                        color: "rgb(219, 219, 219)",
                      }}
                    >
                      {value.info}
                    </div>
                  </h4>
                  <div className="postButtons">
                    {value.link ? (
                      <div className="portfolio-button">
                        <a
                          className="rn-btn"
                          href={value.link}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Live
                        </a>
                      </div>
                    ) : null}
                    {value.repo ? (
                      <div className="portfolio-button">
                        <a
                          className="rn-btn"
                          href={value.repo}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Repo
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}
export default PortfolioList
