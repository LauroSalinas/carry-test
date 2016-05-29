(ns counter.utils
  )

(defn rand-free-position
      "Function takes snake and board-size as args,
      returns random position not colliding with snake body"
      [snake [x y]]
      (let [snake-positions-set (into #{} (:body snake))
            board-positions (for [x-pos (range x)
                                  y-pos (range y)]
                                 [x-pos y-pos])]
           (when-let [free-positions (seq (remove snake-positions-set board-positions))]
                     (rand-nth free-positions))))

