from flask import Flask, jsonify, request
import requests
import base64

app = Flask(__name__)

@app.route('/trigger-job', methods=['POST'])
def trigger_job():
    # Using PAT as Basic Auth
    #pat = "rt_5049F4739CF09236D6808ED8B1B3172569DD4ED6484ADCE00D16AF1474BAB2F0-1"
    #auth = base64.b64encode(f":{pat}".encode()).decode()  # username blank, PAT as password

    headers = {
        "Authorization": "Bearer rt_5049F4739CF09236D6808ED8B1B3172569DD4ED6484ADCE00D16AF1474BAB2F0-1",
        "Content-Type": "application/json",
        "X-UIPATH-TenantName": "DefaultTenant",
        "X-UIPATH-OrganizationUnitId": "6241209"
    }

    data = {
        "startInfo": {
            "ReleaseKey": "2ae11ef2-8175-4a71-8b41-f69952ad685d",
            "Strategy": "ModernJobsCount",
            "JobsCount": 1,
            "RuntimeType": "Unattended"
        }
    }

    res = requests.post(
        "https://cloud.uipath.com/sidcgllzzp/DefaultTenant/orchestrator_/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs",
        headers=headers,
        json=data
    )

    try:
        return jsonify(res.json()), res.status_code
    except:
        return {"error": "Non-JSON response", "text": res.text}, res.status_code

# ✅ This part is missing in your code — add it to run Flask app
if __name__ == "__main__":
    app.run(debug=True)
