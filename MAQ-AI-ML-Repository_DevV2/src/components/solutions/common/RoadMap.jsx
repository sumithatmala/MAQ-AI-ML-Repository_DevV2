import Diagram, { useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import './css/RoadMap.css';

const RoadMap = (props) => {
    const [schema, { onChange }] = useSchema(props.items);
    
    return ( 
      <section>
        <h2 className="center__title">{props.title}</h2>
        <div style={{width:'100%', height: '30rem', display: "flex", justifyContent: "center" }}>
          <Diagram schema={schema} onChange={onChange} />
        </div>
      </section>
    );
  };

export default RoadMap;
