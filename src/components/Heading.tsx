import styles from './Heading.module.css';

export function Heading(props) {
  console.log(props);
  return (
    <h1 className={`${styles.heading} ${styles.beige}`} style={props.style}>
      {props.children}
    </h1>
  );
}
