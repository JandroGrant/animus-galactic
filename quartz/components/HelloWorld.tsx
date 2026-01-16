export default (() => {
  function HelloWorld(props: QuartzComponentProps) {
    return <p>Hello World!</p>
  }

  return HelloWorld
}) satisfies QuartzComponentConstructor
