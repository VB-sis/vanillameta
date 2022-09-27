// import { Connection } from "typeorm";
// import { Seeder,Factory } from "typeorm-seeding";
// import { Component } from "../component/entities/component.entity";
//
//
// export class CreateInitialData implements Seeder {
//     public async run(factory:Factory , connection:Connection) : Promise<any>{
//         await connection
//             .createQueryBuilder()
//             .insert()
//             .into(Component)
//             .values([
//                 {
//                     type: "CHART_LINE",
//                     title: "선형 차트",
//                     icon: "icon/line-chart.png",
//                     caption: "Line Chart",
//                     option: {
//                         title: "",
//                         xField: "",
//                         series: [
//                             {
//                                 field: "",
//                                 "color": "#5470c6",
//                                 "aggregation": ""
//                             }
//                         ],
//                         "legendPosition": "left"
//                     }
//                 },
//                 {
//                     "type": "CHART_AREA",
//                     "title": "영역형 차트",
//                     "icon": "icon/area-chart.png",
//                     "caption": "Area Chart",
//                     "option": {
//                         "title": "",
//                         "xField": "",
//                         "series": [
//                             {
//                                 "field": "",
//                                 "color": "#5470c6",
//                                 "aggregation": ""
//                             }
//                         ],
//                         "legendPosition": "left"
//                     }
//                 }
//                 ]
//             )
//     }
// }