use warp::Filter;
mod handlers;
mod routes;

#[tokio::main]
async fn main() {
    let router = routes::upload_route()
        .or(routes::static_files_route())
        .or(routes::ip_route())
        .or(routes::print_file_route())
        .recover(handlers::handle_rejection);

    println!("Server started at localhost:8080");
    warp::serve(router).run(([0, 0, 0, 0], 8080)).await;
}
