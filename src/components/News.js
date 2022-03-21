import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super()
    this.state = {
      articles : [],
      loading : false,
      page: 1,
    }
  }

  async componentDidMount(){
      
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b207ab3427804fbf8f8eecfcb53d0b67&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({
           articles: parsedata.articles,
           totalResults: parsedata.totalResults, 
           loading: false
          })
      
  }

    handelPreviewClick = async () =>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b207ab3427804fbf8f8eecfcb53d0b67&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({
          articles: parsedata.articles,
          page: this.state.page -1,
          loading: false
        })
    }

    handelNextClick = async () =>{
        console.log("Next");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b207ab3427804fbf8f8eecfcb53d0b67&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({
          articles: parsedata.articles, 
          page: this.state.page +1,
          loading: false
        })
    } 

  render() {
    
    return (<>
    {this.state.loading && <Loader />}      
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element, i) => {
            const {title, description, urlToImage, url} = element || {}
            return <div className="col-md-4" key={i}>
            <NewsItem title={title?title.slice(0,35):""} description={description?description.slice(0,95):""} urlToImage={urlToImage?urlToImage:"https://images.hindustantimes.com/tech/img/2022/03/11/1600x900/WhatsApp_Web_1646971546105_1646971554946.jpg"} newsUrl={url}/>
          </div>
        })}

        </div>
      </div>
      <div className="container mb-5 d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handelPreviewClick}>&larr; Previous</button>
        <button href="/" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/6)} className="btn btn-dark" onClick={this.handelNextClick}>Next &rarr;</button>
      </div>
      </>
    )
  }
}

export default News