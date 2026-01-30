// ---------------------------------------------------------------
// lib/model.js  (or wherever you keep the helper)
// ---------------------------------------------------------------
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

/**
 * Loads a GLB file into a Three.js scene.
 *
 * @param {THREE.Scene} scene          – The scene to which the model will be added.
 * @param {string}       glbPath       – Path/URL of the .glb asset (e.g. '/terre.glb').
 * @param {Object}       [options={}]  – Optional shadow settings.
 * @param {boolean}      options.receiveShadow – Whether meshes receive shadows.
 * @param {boolean}      options.castShadow    – Whether meshes cast shadows.
 *
 * @returns {Promise<THREE.Object3D>} Resolves with the root object of the loaded model.
 */
export async function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    // ---------- 1️⃣ CORS fix ----------
    // Makes the temporary blob URLs that GLTFLoader creates for embedded textures fetchable.
    loader.setCrossOrigin('anonymous')

    loader.load(
      glbPath,
      // success callback
      (gltf) => {
        const obj = gltf.scene

        // ---- Your original positioning / naming logic ----
        obj.name = 'dog'
        obj.position.y = -4
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        // NOTE: `translateY` is a method, not a property. If you intended to move the object
        // upward by 10 units, call it as a function:
        obj.translateY(10)

        // Add to the supplied scene
        scene.add(obj)

        // Apply shadow settings to every mesh in the hierarchy
        obj.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })

        resolve(obj) // resolve with the root object
      },

      // progress callback – we don’t need it, so leave undefined
      undefined,

      // error callback
      (error) => {
        reject(error)
      }
    )
  })
}