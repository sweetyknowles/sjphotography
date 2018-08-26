import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'



class Photo extends Component {
    render() {

        const photos = [{
            

            original: 'https://i.kinja-img.com/gawker-media/image/upload/s--YFybMImn--/c_scale,f_auto,fl_progressive,q_80,w_800/w8xvxzrj8kn1iuzrjnqt.jpg',
            //thumbnail: 'http://lorempixel.com/250/150/nature/1/',
          },
          //{
        //     original: 'http://lorempixel.com/1000/600/nature/2/',
        //     //thumbnail: 'http://lorempixel.com/250/150/nature/2/'
        //   },
        //   {
        //     original: 'http://lorempixel.com/1000/600/nature/3/',
        //     //thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        //   }
    ]


        return (
            <ImageGallery items={photos} />
            
        );
    }
}

export default Photo;