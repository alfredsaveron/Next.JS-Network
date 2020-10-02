import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Nith's Website | Homepage</title>
        <link rel="icon" href="../small-image.ico" />
      </Head>

      <main>
        <Layout>
          <div className="global">
            <div className="header">
              <h1 className="header-title">Hello world!</h1>
              <div className="social-medias">
                <h3 className="paragraph-title">All of my social media accounts!</h3>
                <div className="social-media-links">
                  <Link href="https://twitter.com/thisisnithy">
                    <a className="social-media"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                  </Link>
                  <Link href="https://www.reddit.com/user/thisisnithy">
                    <a className="social-media"><i class="fab fa-reddit" aria-hidden="true"></i></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blogs">
              <div className="container">
                <h2 className="blog-title">
                  <Link href="/page-1">
                    <p><b>Hey, look at me!</b></p>
                  </Link>
                </h2>
                <div className="blog-date">
                  <Link href="/page-1">
                    <p className="blog-date">May 30</p>
                  </Link>
                </div>
                <p className="blog-detail">Bu yazı, Nith adlı Discord kullanıcısı tarafından ayarlanmış ve kendi websitesinde yayımlanmaya uygun şekilde tasarlanmıştır. Kısacası, bu yazıyı siz okurken ben arkada websitesini yazıyor olacağımdır. Bu yüzden, lütfen yakında yapacağım olan Kullanıcı Arayüzüne ilerleyen vakitlerle bakmaya çekinmeyin!</p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  )
}
