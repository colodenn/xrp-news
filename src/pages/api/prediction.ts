// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { time } from "console";
import { supabase } from "../../../utils/supabaseClient";

export default async (req, res) => {
  const token = req.headers.token

  const { data: user, error } = await supabase.auth.api.getUser(token)
  // TODO(Corno): Add security check; Is it a valid JWT?
  let { data: todo, error:err } = await supabase
        .from('predictions')
        .insert({...req.body, user_id: user.id, votes: 0})
        .single()
  console.log(err,todo)
  if (error || err) return res.status(401).json({ error: error.message })
  return res.status(200).json(todo)
  }
  