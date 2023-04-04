import { Container,Form } from "./styled"
export const Contacts=()=>{
  return(
    <Container>
        <h1>Contatos</h1>
        <Form>
          <label htmlFor="text">
            Name:
            <input type="text" name="text" placeholder="Your Name..."/>
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="" placeholder="Your Email Address..."/>
          </label>
          <label htmlFor="Message">
            Message:
            <input className="message" type="text" name="message" placeholder="Your Message..."/>
          </label>
          <div className="boxBtn"><input type="submit" value="Enviar"  className="submit"/></div>
        </Form>
    </Container>
  )
}