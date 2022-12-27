import { NavLink } from "react-router-dom"

function Section({title, more :boolean = false, items}) {
  return (
    <section>
        <header className="flex items-center justify-between">
        <h3 className="text-2xl text-white font-semibold tracking-thight">{title}</h3>
        {/* { more && (
            <NavLink className={"text-sm font-semibold uppercase text-link"} to={more}>
                SEE ALL
            </NavLink>
        )} */}
        </header>
        <div className="grid grid-cols-5 gap-x-6">
            {
                items.map(item=>(
                    <NavLink 
                    key={item.id}
                    to="/"
                    className={"bg-footer p-4 rounded"}>
                        <img src={item.image} className="aspect-h-1 aspect-w-1 w-full h-full" />
                        {item.title}
                    </NavLink>
                ))
            }

        </div>
    </section>
  )
}

export default Section
