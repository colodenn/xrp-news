// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from "../../../utils/supabaseClient";

export default async (req, res) => {
  let { data: prices, error:err } = await supabase
        .from('ticker')
        .select('*')
        .order('created_at', {ascending: false})
        .limit(1)
        
    res.statusCode = 200
    console.log(prices)
    res.json({  prices })
}
