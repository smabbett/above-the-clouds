export default function formatRotations(flightSegments) {
  const result = new Map();
  flightSegments.forEach((flightSegment) => {
    if (result.has(flightSegment.date)) {
      result.get(flightSegment.date).segments.push({
        layover_stn: flightSegment.layover_stn,
        layover_time: flightSegment.layover_time,
        layover_hotel: flightSegment.layover_hotel,
        leg_status: flightSegment.leg_status,
        flt_num: flightSegment.flt_num,
        equip: flightSegment.equip,
        dept_date: flightSegment.dept_date,
        dept: flightSegment.dept,
        dept_time: flightSegment.dept_time,
        arrv: flightSegment.arrv,
        arrv_time: flightSegment.arrv_time,
        leg_block_time: flightSegment.leg_block_time,
      });
    } else {
      result.set(flightSegment.date, {
        rotation: flightSegment.rotation,
        ttl_rotn_cred: flightSegment.ttl_rotn_cred,
        dom_tafb: flightSegment.dom_tafb,
        intl_tafb: flightSegment.intl_tafb,
        flt_pay: flightSegment.flt_pay,
        night_pay: flightSegment.night_pay,
        intl_pay: flightSegment.intl_pay,
        lang_pay: flightSegment.lang_pay,
        segments: [
          {
            layover_stn: flightSegment.layover_stn,
            layover_time: flightSegment.layover_time,
            layover_hotel: flightSegment.layover_hotel,
            leg_status: flightSegment.leg_status,
            flt_num: flightSegment.flt_num,
            equip: flightSegment.equip,
            dept_date: flightSegment.dept_date,
            dept: flightSegment.dept,
            dept_time: flightSegment.dept_time,
            arrv: flightSegment.arrv,
            arrv_time: flightSegment.arrv_time,
            leg_block_time: flightSegment.leg_block_time,
          },
        ],
      });
    }
  });

  return result;
}
