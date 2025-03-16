import "./styles.css";

export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Header</h1>
      {props.modal}
      {props.children}
    </>
  );
}
