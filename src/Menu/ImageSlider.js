import "./imgslider.css";
function ImageSlider({
  slides,
  currentSlide,
  handlePrevClick,
  handleNextClick,
}) {
  if (!slides) {
    return <h1>Null</h1>; // or display a loading indicator
  }

  return (
    <div className='image-slider'>
      <button className='prev' onClick={handlePrevClick}>
        &lt;
      </button>
      <img src={slides[currentSlide]} alt='product slide' />
      <button className='next' onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
}

export default ImageSlider;
