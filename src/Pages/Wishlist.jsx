import { useWishlist } from "../context/wishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>

      {wishlist.length === 0 && <p>No items in wishlist.</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {wishlist.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm">{item.price}</p>

            <button
              onClick={() => removeFromWishlist(item.id)}
              className="mt-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
