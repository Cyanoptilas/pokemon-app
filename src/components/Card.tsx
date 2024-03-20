import clsx from "clsx";

const Card = ({ pokemon }: any) => {
  return (
    <div className={clsx("w-64 rounded-md shadow-lg hover:shadow-2xl")}>
      <div className={clsx("flex justify-center")}>
        <img className={clsx("mt-6 ")} src={pokemon.sprites.front_default} />
      </div>
      <h3 className={clsx("font-extrabold")}>{pokemon.name}</h3>
      <div>
        <div>タイプ</div>
        {pokemon.types.map((type: { type: { name: string } }) => {
          return (
            <div
              key={type.type.name}
              //   className={clsx("text-blue", "bg-blue-500", "rounded")}
            >
              <span>{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <p>重さ：{pokemon.weight}</p>
        </div>
        <div>
          <p>高さ：{pokemon.height}</p>
        </div>
        <div>
          <p>
            アビリティ
            <div>
              {" "}
              {pokemon.abilities.map(
                (ability: { ability: { name: string } }, i: number) => {
                  return (
                    <>
                      {i != 0 ? " / " : ""}
                      {ability.ability.name}
                    </>
                  );
                }
              )}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
