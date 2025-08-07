import React from "react";

function JSXExamples() {
    const grecting = <h1>Hello, React with JSX</h1>;
    const name = "Thanaphat";
    const age = 20;

    const currentYear = new Date().getFullYear();

    const user = {
        firstName: "Thanaphat",
        lastName: "Sukchuen",
        age: 20,
        hobbies: ["Coding", "Reading", "Gaming"],
    }

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    }

    const isLoggedIn = true;
    const hasNotifications = 3;
}
return (
    <div className="jsx-examples">
        <h1>ตัวอย่างการใช้ JSX</h1>
        <section>
            <h2>
                การเเสดงผลข้อมูล
            </h2>
            {grecting}
            <p>สวัสดีคุณ {name} อายุ {age}</p>
            <p>ปีนี้คือปี {currentYear}</p>
            <p>ชื่อเต็ม : {formatName(user)}</p>
        </section>
        <section>
            <h2>Attributes ใน JSX</h2>
            <div className="card">
                <p className="text-primary">ใช้ className เเทน class</p>
            </div>
            <button
                onClick={() => alert('คลิกแล้ว!')}
                style={{ backgroundColor: "blue", color: 'เมาส์เข้า' }}
            >
            </button>
            <div style={{
                backgroundColor: '#E8F5E8',
                padding: '15px',
                borderRadius: '8px',
                marginTop: '10px'
            }}>
                <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                    Inline styles ใช้ object
                </p>
            </div>
        </section>
        <section>
            <h2>🔀 Conditional Rendering</h2>
            <p>
                สถานะ: {isLoggedIn ? '✅ ล็อกอินแล้ว' : '❌ ยังไม่ได้ล็อกอิน'}
            </p>
            {hasNotification > 0 && (
                <div className="notification">
                    🔔 คุณมี {hasNotification} การแจ้งเตือนใหม่
                </div>
            )}
            {(() => {
                if (user.age >= 18) {
                    return <p>✅ {formatName(user)} เป็นผู้ใหญ่แล้ว</p>;
                } else {
                    return <p>👶 {formatName(user)} ยังเป็นเด็ก</p>;
                }
            })()}
        </section>
    </div>
)
export default JSXExamples;

