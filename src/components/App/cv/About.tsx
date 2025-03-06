import Block from '#/UI/Block'

const aboutData = {
  heading: 'about me',
  text: "I'm a Computer Science student at HSE University with a passion for technology, software, and design. I'm excited to expand my skills and knowledge, with interests in 3D modeling and product promotion complementing my technical studies.",
}

export default function About() {
  return <Block token={'about-cv'} heading={aboutData.heading} text={aboutData.text} />
}
