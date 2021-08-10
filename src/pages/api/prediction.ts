// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from "../../../utils/supabaseClient";

export default async (req, res) => {
      const oneday = 1000* 60* 60* 24;
  const token = req.headers.token
  const { data: user, error } = await supabase.auth.api.getUser(token)
  // TODO(Corno): Add security check; Is it a valid JWT?
  let {data: pre, error: err2} =  await supabase.from('predictions').select('created_at, user_id').filter('user_id', 'eq', user.id).order('created_at', {ascending: false}).limit(1)
  if(Date.now() - Date.parse(pre[0].created_at) > oneday) {
        let { data: todo, error:err } = await supabase
              .from('predictions')
              .insert({...req.body, user_id: user.id, votes: 0})
              .single()
              if (error || err) return res.status(401).json({ error: error.message })
              return res.status(200).json(todo)

  } else {
      return res.status(401).json({ error: 'You have to wait a day before making a new prediction' })
  }
  }
  