import { worldMill } from "@react-jvectormap/world";
import { VectorMap } from "@react-jvectormap/core";
import { colorScale, countries } from "./Countries";

const Mapa = () => {
 
  return (
    <div style={{ margin: "auto", height: "450px" }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
        }}
        backgroundColor="#d0e2f0"
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={function reginalTip(event, label, code) {
          return label.html(`
                <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                  <p>
                  <b>
                  ${label.html()}
                  </b>
                  </p>
                  <p>
                  ${code}
                  </p>
                  </div>`);
        }}
        onMarkerTipShow={function markerTip(event, label) {
          return label.html(`
                <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                  <p style="color: black !important;">
                  <b>
                  ${label.html()}
                  </b>
                  </p>
                  </div>`);
        }}
      />
    </div>
  );
};
export default Mapa;
