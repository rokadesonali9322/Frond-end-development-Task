document.addEventListener('DOMContentLoaded', function () {
  // get all box
  const boxes = document.querySelectorAll('.box')

  boxes.forEach((box) => {
    const dropdown = box.querySelector('.dropdown')
    const radioButton = box.querySelector('.radio-button')

    radioButton.addEventListener('click', () => {
      //  show the drop-down box when user click on the radio button
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none'
        box.classList.remove('expanded')
        box.style.border = '1px solid #c8c8c8'
        box.style.backgroundColor = '#fff'
      } else {
        //  show the drop-down box when user click on the radio button
        boxes.forEach((otherBox) => {
          if (otherBox !== box) {
            otherBox.querySelector('.dropdown').style.display = 'none'
            otherBox.classList.remove('expanded')
            otherBox.style.border = '1px solid #c8c8c8'
            otherBox.style.backgroundColor = '#fff'
          }
        })
        dropdown.style.display = 'block'
        box.classList.add('expanded')

        // Update box border color based on radio button value
        if (radioButton.value === 'color') {
          box.style.border = '2px solid #007f61'
          box.style.backgroundColor = '#F4FBF9'
        }
      }
    })
  })
})
