// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from "../../../utils/supabaseClient";

export default async (req, res) => {
  let { data: prices, error:err } = await supabase
        .from('newsletter')
        .insert({created_at: new Date(), email: req.body.email})
    res.statusCode = 200
    res.json({prices})
}
