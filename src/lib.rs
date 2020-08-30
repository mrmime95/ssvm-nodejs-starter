use wasm_bindgen::prelude::*;
extern crate serde_json;

#[wasm_bindgen]
 pub fn plus(params: &str) -> String {
  let ps: (f32, f32) = serde_json::from_str(&params).unwrap();
  let result = ps.0 + ps.1; 
  return serde_json::to_string(&result).unwrap();
} 

#[wasm_bindgen]
pub fn minus(params: &str) -> String {
  let ps: (f32, f32)  = serde_json::from_str(&params).unwrap();
  let result = ps.0 - ps.1;
  return serde_json::to_string(&result).unwrap();
} 

#[wasm_bindgen]
pub fn times(params: &str) -> String {
  let ps:(f32, f32)  = serde_json::from_str(&params).unwrap();
  let result = ps.0 * ps.1; 
  return serde_json::to_string(&result).unwrap();
} 

#[wasm_bindgen]
pub fn div(params: &str) -> String {
  let ps: (f32, f32)  = serde_json::from_str(&params).unwrap();
  if ps.1 == 0.0 {
    println!("Rust: Err Division by zero({})", ps.1); 
    return serde_json::to_string("Err").unwrap();
  }
  let result = ps.0 / ps.1; 
  return serde_json::to_string(&result).unwrap();
} 
