use std::collections::HashMap;

use crate::handlers::{print_file, upload};
use local_ip_address::local_ip;
use warp::Filter;

pub fn upload_route() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    let upload_route = warp::path("upload")
        .and(warp::post())
        .and(warp::multipart::form().max_length(5_000_000))
        .and_then(upload);
    upload_route
}

pub fn static_files_route(
) -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::get().and(warp::fs::dir("./build"))
}

pub fn print_file_route() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone
{
    warp::post()
        .and(warp::path("print"))
        .and(warp::query::<HashMap<String, String>>())
        .and_then(|query: HashMap<String, String>| {
            print_file(query.get("file").unwrap().to_string())
        })
}

pub fn ip_route() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::path("ip")
        .and(warp::get())
        .map(|| local_ip().unwrap().to_string())
}
