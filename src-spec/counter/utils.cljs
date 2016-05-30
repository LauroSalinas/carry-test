(ns counter.utils
  )

(def key-code->move
  "Mapping from the integer key code to the direction vector corresponding to that key"
  {38 [0 -1]
   40 [0 1]
   39 [1 0]
   37 [-1 0]})

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

(defn give-new-snake
  [snake new-head]
  (let [new-bod (into [] (drop-last (cons new-head (:body snake))))]
    (assoc snake :body new-bod)))

(defn move-snake
  "Move the snake based on positions and directions of each snake body segment"
  [snake dispatch]
  (let [snake-dir (:direction snake)
        snake-bod (:body snake)
        new-head-pos (mapv + snake-dir (first snake-bod))]
    (dispatch [:updatesnakebod (give-new-snake snake new-head-pos)])
    )
  )

(defn gmove-snake
  "Move the snake based on positions and directions of each snake body segment"
  [snake]
  (let [snake-dir (:direction snake)
        snake-bod (:body snake)
        new-head-pos (mapv + snake-dir (first snake-bod))]
    (give-new-snake snake new-head-pos)
    )
  )

(defn change-snake-direction
  "Changes the snake head direction, only when it's perpendicular to the old head direction"
  [[new-x new-y] [x y]]
  (if (or (= x new-x)
          (= y new-y))
    [x y]
    [new-x new-y]))

(defn snake-tail
  [coord1 coord2])