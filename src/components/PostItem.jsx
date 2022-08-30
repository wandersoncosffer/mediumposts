export function PostItem(props) {

  function createMarkup() {
    return {__html: props.post.content};
  }
  
  function InnerHTMLFromMedium() {
    return <div className="main-li" dangerouslySetInnerHTML={createMarkup()} />;
  }

  
  return (

    <section className="main-ul">  
      <InnerHTMLFromMedium/>
    </section>
    
  );

}