export function isOnScreen (sectionName: string) {
  const target = document.querySelector('#' + sectionName)

  // animate-revBlock
  const observer = new IntersectionObserver((entries: any) => {
    entries.forEach((entry: any) => {
      // Is the element in the viewport?
      if (entry.isIntersecting) {
        // Add the fadeIn class:
        console.log(entry.isIntersecting)
        const textTargets = document.querySelectorAll(
          '#' + sectionName + ' .js-show-text-on-scroll'
        )

        const blockTargets = document.querySelectorAll(
          '#' + sectionName + ' .js-show-block-on-scroll'
        )

        textTargets.forEach((target: any) => {
          target.classList.add('animate-revBlock')
        })

        blockTargets.forEach((target: any) => {
          target.classList.add('after:animate-revBlockAfter')
        })
      } else {
        // Otherwise remove the fadein class
        // entry.target.classList.remove('animate-revBlock')
      }
    })
  })
  if (target) {
    observer.observe(target)
  }
}
