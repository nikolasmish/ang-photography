import React from 'react'

import './images-container.styles.scss'

import ImagePreview from '../image-preview/image-preview.component'
import {firestore} from '../../firebase/firebase.utils'

let Arr = []


class ImagesContainer extends React.Component{
  constructor({data, ...props}){
    super(props)

    this.state = {
      images: [],
      setImages: []
    }
  }

    fetchImages=async()=>{
      let temp = []
      const response=firestore.collection(this.props.data);
      const data=await response.get();
      data.docs.forEach(item=>{
      temp.push(item.data())
      })
      Arr = temp
      
      this.setState({})
    }

  
  componentDidMount(){
    if(Arr.length)
    return
    this.fetchImages()
  }


    render(){
      return(
          <div className='images'>
              <ul>
              {
                Arr.length ?
                Arr.map(
                  (image, idx) => (
                  <li key={idx}><ImagePreview id={idx} description={image.description} imageUrl={image.imageUrl} title={image.title} imagesData={Arr}/></li>)
                  )
                  :
                  null
              } 
              </ul>
          </div>
      )
    }
            
}

export default ImagesContainer