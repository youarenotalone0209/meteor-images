// Create our image list component
// Import React
(function() {
    import React from 'react';
    import ImageDetail from './image_detail';

// Create our component
    const ImageList = (props) => {

        const validImages = props.images.filter(img => !img.is_album);

        //passing image prop into ImageDetail component
        const RenderedImages = validImages.map(image =>
            //we can use picture={image} here, but we need to change its name on ImageDetail also
            //optional on ES6, we can remove return and curly braces if there is only 1 line of code in a function
            <ImageDetail key={image.title} image={image}/>
        );

        return (
            <ul className="media-list list-group">
                {RenderedImages}
            </ul>
        );
    };

// Export our component
    export default ImageList;
})();
