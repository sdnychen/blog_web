// 轮播图数据类型
interface CarouselType {
  uid: string,
  title: string,
  src: string,
  url: string,
  alt: string,
  type: number
}

// 文章数据类型
interface PostType {
  uid: string,
  title: string,
  img: string,
  alt: string,
  tag: string,
  class: string,
  abstract: string,
  author: string,
  type: number,
  status: number
  created: string | Date,
  update: string | Date,
  remark: string
}
