import { Service } from "@shutters/shutterkit";

class ApiService extends Service {
	protected setup() {
		super.setup();

		this.app.get("/_health", (c) => c.text("OK"));
		this.app.get("/error", (c) => {
			throw new Error("Oops!");
		});
	}
}

const svc = new ApiService();
svc.start();
