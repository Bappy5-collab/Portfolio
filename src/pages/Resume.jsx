import { MdFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import Loader from "../components/Loader";

const Resume = () => {
    const [isLoading, setIsLoading] = useState(false);

    const downloadResume = async () => {
        setIsLoading(true);
        
        try {
            // Convert Google Docs share link to PDF download link
            const documentId = '1L30w0OBb-CzZnx0O0fbCQrRhlnkEQuxMm7NfU0Zp0IM';
            const downloadUrl = `https://docs.google.com/document/d/${documentId}/export?format=pdf`;
            
            // Small delay for better UX
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Create a temporary anchor element to trigger download
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', 'Chandon-Kumar-Resume.pdf');
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Hide loader after download starts
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        } catch (error) {
            console.error('Error downloading resume:', error);
            setIsLoading(false);
        }
    };

    return (
        <>
            <Loader isLoading={isLoading} />
            <motion.button
                onClick={downloadResume}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download Resume"
                disabled={isLoading}
            >
                Resume
                <MdFileDownload className="text-lg" />
            </motion.button>
        </>
    );
};

export default Resume;