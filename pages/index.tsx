import Layout from '../components/Layout'
import { Comment } from '../src/comment';

const IndexPage = () => {
  
  const fetchOg = () => {
    fetch('/api/og')
      .then((response) => {
        const reader = response.body.getReader();
        return new ReadableStream({
          start(controller) {
            return pump();
            function pump() {
              return reader.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }
                controller.enqueue(value);
                return pump();
              });
            }
          }
        })
      })
      .then((stream) => new Response(stream))
      .then((response) => response.blob())
      .then(URL.createObjectURL)
      .then((url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = "filename.png";
        document.body.appendChild(link);
        link.dispatchEvent(
          new MouseEvent('click', { 
            bubbles: true, 
            cancelable: true, 
            view: window 
          })
        );
        document.body.removeChild(link);
      })
      .catch((err) => console.error(err));
    }
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="container mx-auto">
        <Comment classProp="className" scale={false} />
        <button onClick={fetchOg} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download</span>
        </button>
      </div>
    </Layout>
  )
}

export default IndexPage
